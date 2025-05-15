
import sum1355 from '../sum1355.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 14 to equal 113 + offset 0.9930368845951838', (t) => {
  assert.strictEqual(sum1355(99, 14), 113 + 0.9930368845951838);
});
