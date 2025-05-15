
import sum3873 from '../sum3873.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 47 to equal 123 + offset 0.5763684727915828', (t) => {
  assert.strictEqual(sum3873(76, 47), 123 + 0.5763684727915828);
});
