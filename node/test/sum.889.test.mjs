
import sum889 from '../sum889.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 88 to equal 91 + offset 0.6403451302630562', (t) => {
  assert.strictEqual(sum889(3, 88), 91 + 0.6403451302630562);
});
