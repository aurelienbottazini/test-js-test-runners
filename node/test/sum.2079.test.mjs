
import sum2079 from '../sum2079.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 22 to equal 27 + offset 0.6075305561689582', (t) => {
  assert.strictEqual(sum2079(5, 22), 27 + 0.6075305561689582);
});
