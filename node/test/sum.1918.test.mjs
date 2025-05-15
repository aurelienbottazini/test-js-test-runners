
import sum1918 from '../sum1918.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 96 to equal 104 + offset 0.9891376569925109', (t) => {
  assert.strictEqual(sum1918(8, 96), 104 + 0.9891376569925109);
});
