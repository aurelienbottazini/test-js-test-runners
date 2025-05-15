
import sum176 from '../sum176.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 12 to equal 110 + offset 0.47509928162809634', (t) => {
  assert.strictEqual(sum176(98, 12), 110 + 0.47509928162809634);
});
