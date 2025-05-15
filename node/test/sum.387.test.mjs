
import sum387 from '../sum387.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 9 to equal 27 + offset 0.37284903568701744', (t) => {
  assert.strictEqual(sum387(18, 9), 27 + 0.37284903568701744);
});
