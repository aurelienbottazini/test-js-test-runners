
import sum2480 from '../sum2480.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 48 to equal 122 + offset 0.4764520799783216', (t) => {
  assert.strictEqual(sum2480(74, 48), 122 + 0.4764520799783216);
});
