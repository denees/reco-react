import React from "react";

export type UserItemProp = [
	avatar: string,
	email: string
]

export type AppItemProp = [
	logo: string,
	name: string,
	category: string,
	connector: string,
	users: UserItemProp,
	lastClassification: string
]

const users = [
	{avatar: 'img', email: 'alex@acme.ai'},
	{avatar: 'img', email: 'alex@acme.ai'},
	{avatar: 'img', email: 'alex@acme.ai'},
	{avatar: 'img', email: 'alex@acme.ai'},
	{avatar: 'img', email: 'alex@acme.ai'},
	{avatar: 'img', email: 'alex@acme.ai'},
	{avatar: 'img', email: 'alex@acme.ai'},
	{avatar: 'img', email: 'alex@acme.ai'},
	{avatar: 'img', email: 'alex@acme.ai'},
	{avatar: 'img', email: 'alex@acme.ai'},
	{avatar: 'img', email: 'alex@acme.ai'},
	{avatar: 'img', email: 'alex@acme.ai'},
	{avatar: 'img', email: 'alex@acme.ai'},
	{avatar: 'img', email: 'alex@acme.ai'},
	{avatar: 'img', email: 'alex@acme.ai'}
]

const appsList = [
	{logo: 'img', name: 'Zoom', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Slack', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'XSOAR', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Torq', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Virtu', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Tines', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Splunk', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Sharepoint', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Servicenow', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Zoom', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Slack', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'XSOAR', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Torq', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Virtu', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Tines', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Splunk', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Sharepoint', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Servicenow', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Zoom', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Slack', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'XSOAR', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Torq', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Virtu', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Tines', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Splunk', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Sharepoint', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'},
	{logo: 'img', name: 'Servicenow', category: 'Video conferencing..', connector: 'Reco', users: users, lastClassification: '2 days ago'}
]

export function useGetAppsList(): AppItemProp[] {
	return appsList;
}
