
import sum907 from '../sum907.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 6 to equal 16 + offset 0.5309633684586657', (t) => {
  assert.strictEqual(sum907(10, 6), 16 + 0.5309633684586657);
});
