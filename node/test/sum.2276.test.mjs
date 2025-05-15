
import sum2276 from '../sum2276.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 0 to equal 77 + offset 0.9145684453271912', (t) => {
  assert.strictEqual(sum2276(77, 0), 77 + 0.9145684453271912);
});
