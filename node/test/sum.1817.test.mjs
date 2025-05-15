
import sum1817 from '../sum1817.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 75 to equal 129 + offset 0.28928757030624075', (t) => {
  assert.strictEqual(sum1817(54, 75), 129 + 0.28928757030624075);
});
