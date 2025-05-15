
import sum4985 from '../sum4985.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 50 to equal 65 + offset 0.2469692925600745', (t) => {
  assert.strictEqual(sum4985(15, 50), 65 + 0.2469692925600745);
});
