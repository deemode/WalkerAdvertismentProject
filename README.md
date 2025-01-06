# Walker Advertisement API and Dashboard Documentation

## Introduction
This documentation provides information about the Walker Advertisement API and Dashboard, designed to manage legal leads in real-time. It follows the Diátaxis documentation framework, splitting content into **Tutorials**, **How-To Guides**, **Reference**, and **Explanations**.

---

## Tutorials

### Getting Started with the API and Dashboard
This tutorial walks you through deploying and testing the API and dashboard.

#### Step 1: Deploy the API
1. The API is hosted on Azure App Services at:  
   `<API_URL>` (e.g., `https://walkeradvertisementapi.azurewebsites.net`).
2. Supported endpoints include:
   - `POST /Leads/CreateLead`: Submit new leads.
   - `GET /Leads/GetAllLeads`: Retrieve all leads.
   - `GET /Leads/GetLeadById/:id`: Retrieve a single lead by ID.

#### Step 2: Access the Dashboard
1. The dashboard is hosted on Azure Static Web Apps at:  
   `<Web_UI_URL>` (e.g., `https://icy-forest-0ece3310f.4.azurestaticapps.net/`).

#### Step 3: Test the Integration
1. Create a lead using the New Lead button.
2. Verify the lead is displayed in the Dashboard list by hitting the back button.
3. Use an API client (e.g., Postman) to query the API and confirm data accuracy.

---

## How-To Guides

### Submitting a New Lead
To submit a new lead:
1. Open the Dashboard and click New Lead.
2. Fill out the form with the following details:
   - **Name** (required)
   - **Phone Number** (required)
   - **Zip Code** (required)
   - **Can Communicate via Email/Text** (required)
   - **Email** (optional)
3. Click **Submit**.  
   The lead will be sent to the API and stored.

Alternatively, use the API directly:

```bash
curl -X POST <API_URL>/leads \
-H "Content-Type: application/json" \
-H "X-Api-Key: <YOUR_API_KEY>" \
-d '{
  "Name": "John Doe",
  "PhoneNumber": "555-555-5555",
  "ZipCode": "12345",
  "CanCommunicateText": true,
  "CanCommunicateEmail": false,
  "Email": "johndoe@example.com"
}'
```
## References

### API Endpoints

| Method |	Endpoint | Description
| -------- | ------- | ------- |
| POST	| /leads |	Create a new lead |
| GET |	/leads |	Retrieve all leads |
| GET	| /leads/:id |	Retrieve a lead by its ID |

### Headers
- Content-Type: application/json
- X-Api-Key: <YOUR_API_KEY>


## Explanation

### Why Use a Dashboard and API?
The combination of a REST API and Dashboard UI provides flexibility:

- API: Supports integration with external systems (e.g., webhook pushes from lead providers).
- Dashboard: Offers an intuitive interface for non-technical users to manage leads.

## Error Handling
### API Errors
- 400 Bad Request: Invalid or missing fields in the request.
- 401 Unauthorized: Missing or invalid X-Api-Key header.
- 404 Not Found: Lead ID does not exist.

### Dashboard Errors
- Displays user-friendly messages for failed API requests (e.g., "Unable to load leads").

## Security
### API Key

The X-Api-Key is required for all API requests. This ensures that only authorized systems can access or modify leads.

# Next Steps: Enhancing Security and Functionality

To improve the overall security and functionality of your API and Dashboard, consider implementing the following advanced features:

---

### Use JWT
JSON Web Tokens (JWT) are a secure and scalable way to authenticate users and provide session-based functionality for real-time applications. By using JWT:
- You can verify user identities without storing session data on the server.
- Real-time actions (e.g., live lead updates) can be authenticated seamlessly.

### Implement Rate Limiting

Rate limiting protects your API from abuse and ensures fair usage by:

- Preventing excessive requests from a single client.
- Reducing server load and mitigating DDoS attacks.

### Enable CORS Safely

Restrict Cross-Origin Resource Sharing (CORS) to trusted domains. This is already done to some level with the current implementation.

### Monitor and Log Activity
Comprehensive logging helps:

- Detect suspicious activity.
- Debug issues quickly.
