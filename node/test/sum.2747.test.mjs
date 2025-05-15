
import sum2747 from '../sum2747.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 2 to equal 77 + offset 0.8559662251199005', (t) => {
  assert.strictEqual(sum2747(75, 2), 77 + 0.8559662251199005);
});
