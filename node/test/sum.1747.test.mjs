
import sum1747 from '../sum1747.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 17 to equal 21 + offset 0.5890504975485282', (t) => {
  assert.strictEqual(sum1747(4, 17), 21 + 0.5890504975485282);
});
