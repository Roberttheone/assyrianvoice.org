import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest){
  const payload = await req.json();
  if(!payload?.email || !payload?.org){
    return NextResponse.json({ok:false,error:'Missing fields'},{status:400});
  }
  // TODO: save to Airtable/Sheets and send email
  console.log('SIGNON DEMO ->', payload);
  return NextResponse.json({ok:true});
}
