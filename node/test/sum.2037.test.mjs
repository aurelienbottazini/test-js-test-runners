
import sum2037 from '../sum2037.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 33 to equal 104 + offset 0.5704433253453419', (t) => {
  assert.strictEqual(sum2037(71, 33), 104 + 0.5704433253453419);
});
