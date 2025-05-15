
import sum2781 from '../sum2781.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 45 to equal 62 + offset 0.7994150618260665', (t) => {
  assert.strictEqual(sum2781(17, 45), 62 + 0.7994150618260665);
});
