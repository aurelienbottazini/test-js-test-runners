
import sum811 from '../sum811.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 7 to equal 38 + offset 0.44701530813423207', (t) => {
  assert.strictEqual(sum811(31, 7), 38 + 0.44701530813423207);
});
