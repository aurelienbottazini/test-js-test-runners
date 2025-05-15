
import sum1437 from '../sum1437.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 69 to equal 91 + offset 0.3459073083248918', (t) => {
  assert.strictEqual(sum1437(22, 69), 91 + 0.3459073083248918);
});
