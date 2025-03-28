import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Organization {
  id: string;
  name: string;
  description: string;
  lat: number;
  long: number;
  photo: string;
  user_id: string;
}

interface OrganizationsState {
  organizations: Organization[];
}

const initialState: OrganizationsState = {
  organizations: [],
};

const organizationsSlice = createSlice({
  name: "organizations",
  initialState,
  reducers: {
    createOrganization: (state, action: PayloadAction<Organization>) => {
      state.organizations.push(action.payload);
    },
  },
});

export const { createOrganization } = organizationsSlice.actions;
export default organizationsSlice.reducer;
