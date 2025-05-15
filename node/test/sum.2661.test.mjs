
import sum2661 from '../sum2661.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 18 to equal 35 + offset 0.8596153109262513', (t) => {
  assert.strictEqual(sum2661(17, 18), 35 + 0.8596153109262513);
});
