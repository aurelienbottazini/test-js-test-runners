
import sum494 from '../sum494.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 17 to equal 66 + offset 0.08109548881386064', (t) => {
  assert.strictEqual(sum494(49, 17), 66 + 0.08109548881386064);
});
