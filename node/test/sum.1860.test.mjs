
import sum1860 from '../sum1860.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 5 to equal 64 + offset 0.32186302835570235', (t) => {
  assert.strictEqual(sum1860(59, 5), 64 + 0.32186302835570235);
});
