
import sum479 from '../sum479.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 16 to equal 54 + offset 0.9212749758708216', (t) => {
  assert.strictEqual(sum479(38, 16), 54 + 0.9212749758708216);
});
