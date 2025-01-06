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
   - `POST /leads`: Submit new leads.
   - `GET /leads`: Retrieve all leads.
   - `GET /leads/:id`: Retrieve a single lead by ID.

#### Step 2: Access the Dashboard
1. The dashboard is hosted on Azure Static Web Apps at:  
   `<Web_UI_URL>` (e.g., `https://icy-forest-0ece3310f.4.azurestaticapps.net/`).
2. Navigate to:
   - `/leads`: To view the list of leads.
   - `/create-lead`: To create a new lead.

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

The X-Api-Key is required for all API requests. This ensures only authorized systems can access or modify leads.