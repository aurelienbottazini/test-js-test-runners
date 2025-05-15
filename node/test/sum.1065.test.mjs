
import sum1065 from '../sum1065.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 99 to equal 160 + offset 0.8802021161807636', (t) => {
  assert.strictEqual(sum1065(61, 99), 160 + 0.8802021161807636);
});
