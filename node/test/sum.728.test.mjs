
import sum728 from '../sum728.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 5 to equal 30 + offset 0.7893602280362277', (t) => {
  assert.strictEqual(sum728(25, 5), 30 + 0.7893602280362277);
});
