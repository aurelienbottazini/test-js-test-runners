
import sum66 from '../sum66.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 47 to equal 107 + offset 0.3575975566349885', (t) => {
  assert.strictEqual(sum66(60, 47), 107 + 0.3575975566349885);
});
