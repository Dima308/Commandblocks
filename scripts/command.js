const commandblocks={
  command(tile,msg){
    if(msg.substring(0,1)!="/") msg="/"+msg;
    var argstmp = msg.substring(1).split('"');
    var args=[];
    for(var i=0;i<argstmp.length;i++){
      if(i%2==0){
        if(argstmp[i].trim()!=''){
          args=args.concat(argstmp[i].trim().split(' '));
        }
      }
      else{
        args.push(argstmp[i].trim());
      }
    }
    if(args.length==0){
      return false;
    }
    var cmd = args[0];
    args = args.splice(1);
    try{
    switch(cmd){
      case 'overwrite':
        setMessageBlockText(null,tile,args.join(' '));
        return true;
      break;
      case 'say':
        Call.sendMessage(args.join(' '));
        return true;
      break;
      case 'title':
        Vars.ui.scriptfrag.addMessage(args.join(' '));
        return false;
      break;
      default:
        return false;
    }
    }
    catch(err){
      Call.sendMessage(err);
    }
  }
};
this.global.commandblocks=commandblocks;
