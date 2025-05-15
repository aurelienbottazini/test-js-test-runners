
import sum2191 from '../sum2191.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 36 to equal 53 + offset 0.25696101117937065', (t) => {
  assert.strictEqual(sum2191(17, 36), 53 + 0.25696101117937065);
});
