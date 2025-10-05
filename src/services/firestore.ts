import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { UserProfile, UserSettings } from '../types/profile';

const convertTimestamp = (timestamp: Timestamp | Date): Date => {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  }
  return timestamp;
};

export const createUserProfile = async (
  uid: string,
  email: string,
  displayName: string
): Promise<void> => {
  const profileRef = doc(db, 'profiles', uid);
  await setDoc(profileRef, {
    uid,
    email,
    displayName,
    bio: '',
    location: '',
    website: '',
    github: '',
    linkedin: '',
    company: '',
    role: '',
    skills: [],
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  const settingsRef = doc(db, 'settings', uid);
  await setDoc(settingsRef, {
    uid,
    emailNotifications: true,
    testReminders: true,
    weeklyReport: true,
    publicProfile: true,
    showEmail: false,
    theme: 'light',
    language: 'en',
    updatedAt: serverTimestamp(),
  });
};

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  const profileRef = doc(db, 'profiles', uid);
  const profileSnap = await getDoc(profileRef);

  if (profileSnap.exists()) {
    const data = profileSnap.data();
    return {
      ...data,
      createdAt: convertTimestamp(data.createdAt),
      updatedAt: convertTimestamp(data.updatedAt),
    } as UserProfile;
  }
  return null;
};

export const updateUserProfile = async (
  uid: string,
  updates: Partial<UserProfile>
): Promise<void> => {
  const profileRef = doc(db, 'profiles', uid);
  await updateDoc(profileRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
};

export const getUserSettings = async (uid: string): Promise<UserSettings | null> => {
  const settingsRef = doc(db, 'settings', uid);
  const settingsSnap = await getDoc(settingsRef);

  if (settingsSnap.exists()) {
    const data = settingsSnap.data();
    return {
      ...data,
      updatedAt: convertTimestamp(data.updatedAt),
    } as UserSettings;
  }
  return null;
};

export const updateUserSettings = async (
  uid: string,
  updates: Partial<UserSettings>
): Promise<void> => {
  const settingsRef = doc(db, 'settings', uid);
  await updateDoc(settingsRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
};
