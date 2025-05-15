
import sum2173 from '../sum2173.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 50 to equal 146 + offset 0.3938155312161916', (t) => {
  assert.strictEqual(sum2173(96, 50), 146 + 0.3938155312161916);
});
