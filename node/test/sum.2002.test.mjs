
import sum2002 from '../sum2002.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 0 to equal 36 + offset 0.006898208383206206', (t) => {
  assert.strictEqual(sum2002(36, 0), 36 + 0.006898208383206206);
});
