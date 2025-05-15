
import sum3896 from '../sum3896.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 16 to equal 45 + offset 0.4572731353917475', (t) => {
  assert.strictEqual(sum3896(29, 16), 45 + 0.4572731353917475);
});
