
import sum3072 from '../sum3072.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 78 to equal 80 + offset 0.2144608472082612', (t) => {
  assert.strictEqual(sum3072(2, 78), 80 + 0.2144608472082612);
});
