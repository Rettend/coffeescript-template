import commonjs from 'rollup-plugin-commonjs';
import coffee from 'rollup-plugin-coffee-script';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'main.coffee',
  plugins: [
    coffee(),
    nodeResolve({ extensions: ['.js', '.coffee'] }),
    commonjs({
      extensions: ['.js', '.coffee']
    })
  ]
}