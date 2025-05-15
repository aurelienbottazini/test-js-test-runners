
import sum3247 from '../sum3247.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 66 to equal 107 + offset 0.06704411780502861', (t) => {
  assert.strictEqual(sum3247(41, 66), 107 + 0.06704411780502861);
});
