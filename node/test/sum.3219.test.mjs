
import sum3219 from '../sum3219.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 12 to equal 93 + offset 0.9517299070283353', (t) => {
  assert.strictEqual(sum3219(81, 12), 93 + 0.9517299070283353);
});
