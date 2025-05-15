
import sum3502 from '../sum3502.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 70 to equal 166 + offset 0.62478170758', (t) => {
  assert.strictEqual(sum3502(96, 70), 166 + 0.62478170758);
});
