
import sum1479 from '../sum1479.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 18 to equal 23 + offset 0.4970777475505095', (t) => {
  assert.strictEqual(sum1479(5, 18), 23 + 0.4970777475505095);
});
