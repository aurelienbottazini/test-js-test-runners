
import sum4563 from '../sum4563.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 24 to equal 72 + offset 0.48057236896075006', (t) => {
  assert.strictEqual(sum4563(48, 24), 72 + 0.48057236896075006);
});
