
import sum3101 from '../sum3101.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 37 to equal 102 + offset 0.41855032593737296', (t) => {
  assert.strictEqual(sum3101(65, 37), 102 + 0.41855032593737296);
});
