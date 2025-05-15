
import sum77 from '../sum77.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 98 to equal 194 + offset 0.22582414123814287', (t) => {
  assert.strictEqual(sum77(96, 98), 194 + 0.22582414123814287);
});
