
import sum2324 from '../sum2324.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 57 to equal 154 + offset 0.9661355750483078', (t) => {
  assert.strictEqual(sum2324(97, 57), 154 + 0.9661355750483078);
});
