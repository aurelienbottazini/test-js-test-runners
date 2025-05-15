
import sum2745 from '../sum2745.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 82 to equal 82 + offset 0.1669723972016678', (t) => {
  assert.strictEqual(sum2745(0, 82), 82 + 0.1669723972016678);
});
