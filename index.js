const core = require( '@actions/core' );
const github = require( '@actions/github' );
const { processReederLikeFeed, processFeedbinLikeFeed } = require( './process' );
const fs = require( 'fs' );

async function run ( ) {
  await processReederLikeFeed( 'https://149ff8376a964c67a0af03641403af20.s3.pub1.infomaniak.cloud/feeds/IKlrQgSRToKIc2VQypK7vA.json' );
  await processFeedbinLikeFeed( 'https://feedbin.com/starred/9e06fb0a995c4178a5b8f0194f7dc433.xml' );
  
  try {} catch ( error ) {
    core.setFailed( error.message );
  }
}

run( );