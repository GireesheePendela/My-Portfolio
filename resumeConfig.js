// Configuration for Google Drive resume
// RECOMMENDED: Use Google Docs for automatic PDF conversion
// 
// SETUP INSTRUCTIONS:
// 1. Upload your .docx resume to Google Drive
// 2. Right-click the file → "Open with" → "Google Docs" (this converts it to Google Doc format)
// 3. In the Google Doc, click "Share" → Change to "Anyone with the link can view"
// 4. Copy the link - it will look like: https://docs.google.com/document/d/YOUR_FILE_ID_HERE/edit
// 5. Extract the file ID (the part between /d/ and /edit)
// 6. Replace YOUR_GOOGLE_DRIVE_FILE_ID_HERE below with your file ID
//
// Benefits: When you edit the Google Doc, visitors automatically get the updated PDF!

export const RESUME_CONFIG = {
  // Your Google Drive file ID
  fileId: '1OfgSaJVApj3_9FsXq7iaN6KSACGtLwtX',
  
  // Set to 'doc' if using Google Docs (recommended), or 'pdf' if using uploaded PDF
  fileType: 'doc', // Change to 'pdf' if you uploaded a PDF directly instead of using Google Docs
  
  // Generate URLs based on the file ID and type
  get embedUrl() {
    if (this.fileType === 'doc') {
      return `https://docs.google.com/document/d/${this.fileId}/preview`;
    }
    return `https://drive.google.com/file/d/${this.fileId}/preview`;
  },
  
  get downloadUrl() {
    if (this.fileType === 'doc') {
      // Google Docs export as PDF with custom filename
      return `https://docs.google.com/document/d/${this.fileId}/export?format=pdf&attachment=true`;
    }
    // Direct file download
    return `https://drive.google.com/uc?export=download&id=${this.fileId}`;
  },
  
  get viewUrl() {
    if (this.fileType === 'doc') {
      return `https://docs.google.com/document/d/${this.fileId}/edit`;
    }
    return `https://drive.google.com/file/d/${this.fileId}/view`;
  },
  
  // Check if configured
  get isConfigured() {
    return this.fileId !== 'YOUR_GOOGLE_DRIVE_FILE_ID_HERE';
  }
};
