var context = require.context('./test', true, /.spec\.jsx?$/);
context.keys().forEach(context);
