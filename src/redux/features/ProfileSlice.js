import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Inoubli Haithem",
  position: "Web Developer",
  adress: "Tunis, Tunisia",
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.name = action.payload.name;
      state.position = action.payload.position;
      state.adress = action.payload.adress;
      state.bio = action.payload.bio;
    },
  },
});

export const { updateProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
