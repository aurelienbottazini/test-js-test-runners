
import sum2171 from '../sum2171.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 79 to equal 91 + offset 0.9487727997976751', (t) => {
  assert.strictEqual(sum2171(12, 79), 91 + 0.9487727997976751);
});
