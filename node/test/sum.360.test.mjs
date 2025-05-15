
import sum360 from '../sum360.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 10 to equal 92 + offset 0.4467129379392031', (t) => {
  assert.strictEqual(sum360(82, 10), 92 + 0.4467129379392031);
});
